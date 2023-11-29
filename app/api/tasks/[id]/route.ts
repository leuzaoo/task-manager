import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId } = auth();
  const { id } = params;

  if (!userId) {
    return NextResponse.json({ error: "Não autorizado.", status: 401 });
  }

  const task = await prisma.task.delete({
    where: {
      id,
    },
  });

  console.log("Task deleted: ", task);
  return NextResponse.json(task);
  try {
  } catch (error) {
    console.log("Erro ao deletar a tarefa: ", error);
    return NextResponse.json({ error: "Error deleting task", status: 500 });
  }
}
