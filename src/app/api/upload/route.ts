import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { mkdir } from 'fs/promises';

// Helper function to ensure upload directory exists
async function ensureUploadDir() {
  const uploadDir = path.join(process.cwd(), 'uploads');
  try {
    await mkdir(uploadDir, { recursive: true });
    return uploadDir;
  } catch (error) {
    console.error('Error creating upload directory:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];
    const projectId = formData.get('projectId') as string || Date.now().toString();
    
    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files received' },
        { status: 400 }
      );
    }

    const uploadDir = await ensureUploadDir();
    const projectDir = path.join(uploadDir, projectId);
    await mkdir(projectDir, { recursive: true });

    const savedFiles = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        // Create a safe filename
        const originalName = file.name;
        const fileName = `${Date.now()}-${originalName.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
        const filePath = path.join(projectDir, fileName);
        
        await writeFile(filePath, buffer);
        
        return {
          originalName,
          fileName,
          size: file.size,
          type: file.type,
          path: `/uploads/${projectId}/${fileName}`,
        };
      })
    );

    // In a real application, you would save this information to a database

    return NextResponse.json({
      success: true,
      projectId,
      files: savedFiles,
    });
    
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json(
      { error: 'Error uploading files' },
      { status: 500 }
    );
  }
} 