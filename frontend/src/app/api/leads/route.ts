import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("➡️ /api/leads hit");

    const body = await req.json();
    console.log("📦 BODY:", body);

    const backendUrl = process.env.BACKEND_LEADS_URL;
    console.log("🌐 BACKEND_LEADS_URL:", backendUrl);

    if (!backendUrl) {
      console.error("❌ BACKEND_LEADS_URL NO DEFINIDO");
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

    console.log("⬅️ BACKEND STATUS:", res.status);

    const text = await res.text();
    console.log("⬅️ BACKEND RESPONSE RAW:", text);

    if (!res.ok) {
      return NextResponse.json(
        { message: "Backend error", backend: text },
        { status: res.status }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("🔥 API LEADS ERROR:", err);
    return NextResponse.json(
      { message: "Internal error", error: String(err) },
      { status: 500 }
    );
  }
}
