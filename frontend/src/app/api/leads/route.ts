import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const backendUrl = process.env.BACKEND_LEADS_URL;

    if (!backendUrl) {
      return NextResponse.json(
        { message: "Backend URL no configurada" },
        { status: 500 }
      );
    }

    const res = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        { message: "Error procesando solicitud" },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Error procesando solicitud" },
      { status: 500 }
    );
  }
}

