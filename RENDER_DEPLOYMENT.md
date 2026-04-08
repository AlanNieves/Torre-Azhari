# 🚀 Guía Despliegue en Render - AZHARI

## Paso 1: Preparar GitHub (requisito)

Render necesita el código en GitHub. Si aún no lo tienes:

1. Crea un repositorio privado en GitHub (github.com)
2. Sube tu código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tuusuario/azhari.git
   git push -u origin main
   ```

---

## Paso 2: Desplegar BACKEND

### 2.1 Crear cuenta en Render
1. Ve a **render.com**
2. Sign up (puedes usar GitHub)
3. Conecta tu repositorio GitHub

### 2.2 Crear nuevo servicio
1. Dashboard → **New +** → **Web Service**
2. Selecciona tu repositorio
3. Llena los campos:
   - **Name**: `azhari-backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 2.3 Agregar Variables de Entorno
1. En el formulario, ve a **Environment**
2. Agrega estas variables (copia de tu `.env`):

   ```
   NODE_ENV=production
   MONGO_URI=mongodb+srv://lapsuswave_db_user:CLMJiqEKGGDz0PYX@torre-azaria.lam8l0d.mongodb.net/torre_azaria?appName=torre-azaria
   SEND_EMAIL=true
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=lokuas1253@gmail.com
   SMTP_PASS=igqvrmmferljwqwj
   SALES_NOTIFY_TO=alannieves233@gmail.com
   PORT=10000
   ```

3. Click **Create Web Service**

⏳ Espera 2-3 minutos a que se despliegue. Una vez listo, obtendrás una URL como:
```
https://azhari-backend.onrender.com
```

---

## Paso 3: Desplegar FRONTEND

### 3.1 Crear nuevo servicio
1. Dashboard → **New +** → **Web Service**
2. Selecciona tu repositorio (mismo)
3. Llena los campos:
   - **Name**: `azhari-frontend`
   - **Runtime**: Node
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Start Command**: `cd frontend && npm start`

### 3.2 Agregar Variable de Entorno
1. **Environment** → Agrega:
   ```
   NEXT_PUBLIC_API_URL=https://azhari-backend.onrender.com
   ```

2. Click **Create Web Service**

⏳ Espera 3-5 minutos. La URL será algo como:
```
https://azhari-frontend.onrender.com
```

---

## Paso 4: Actualizar tu código (IMPORTANTE)

Necesitas que el frontend sepa la URL del backend. En tu código:

1. **Frontend → `src/lib/api.ts`**:
   ```typescript
   const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
   ```

2. **Frontend → Wherever hacer requests**:
   ```typescript
   const response = await fetch(`${API_BASE_URL}/api/leads`, {...});
   ```

3. **Backend → `src/server.js`** necesita aceptar puerto dinámico (ya lo hace):
   ```javascript
   const PORT = process.env.PORT || 5000;
   ```

---

## Paso 5: Testing

Una vez que ambos estén desplegados:

1. Abre: `https://azhari-frontend.onrender.com`
2. Intenta enviar un formulario de leads
3. Revisa que se guarde en MongoDB

### Si hay errores:
- Dashboard Render → tu servicio → **Logs** (para ver errores)
- Verifica las variables de entorno están correctas

---

## Paso 6: Dominio Personalizado (Opcional)

Si quieres un dominio (ej: `azhari.dev`):

1. En Render: tu servicio → **Settings** → **Custom Domain**
2. Agrega tu dominio
3. Actualiza los DNS con el CNAME que te da Render

---

## Resumen URLs

- **Frontend**: https://azhari-frontend.onrender.com
- **Backend**: https://azhari-backend.onrender.com
- **Comparte con cliente**: La URL del frontend

---

## ⚠️ Importante:

- **En FREE plan**: Los servicios duermen después de 15 min sin usar
- **Escalabilidad**: Cuando crezcas, upgradea a plan de pago
- **Las variables de entorno NO se ven públicamente** (seguro para credenciales)
- **MongoDB Atlas está corriendo gratis** - aprovecha

---

¿Alguna pregunta antes de empezar? 🚀
