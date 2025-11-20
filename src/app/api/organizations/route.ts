import { NextResponse } from "next/server";
import { sampleOrganizations } from "@/lib/sampleData";

export async function GET() {
  // In production, this would query the database
  return NextResponse.json({
    success: true,
    data: sampleOrganizations,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // In production, validate with Zod schema and save to database
    // For now, just echo back with a generated ID
    const newOrganization = {
      id: crypto.randomUUID(),
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json({
      success: true,
      data: newOrganization,
      message: "Organization created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to create organization",
      },
      { status: 500 }
    );
  }
}
