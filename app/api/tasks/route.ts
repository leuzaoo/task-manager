import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "Não autorizado.", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();
    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Os campos: Título, Descrição e Data são obrigatórios.",
        status: 400,
      });
    }

    if (title.length < 2) {
      return NextResponse.json({
        error: "O título precisa ter mais de 2 caracteres.",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (error) {
    console.log("Error creating task:", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
  } catch (error) {
    console.log("Error getting tasks:", error);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (error) {
    console.log("Error updating tasks:", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (error) {
    console.log("Error deleting tasks:", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
