/**
 * InteractiveMap Component
 * 
 * Componente de mapa interactivo usando OpenStreetMap + Leaflet
 * 
 * Características:
 * - Mapa gratuito sin límites (OpenStreetMap)
 * - No requiere API key
 * - Totalmente personalizable
 * - Ligero y optimizado para Next.js
 * - Marcador personalizado para la ubicación del proyecto
 * 
 * Librerías:
 * - leaflet: Motor del mapa
 * - react-leaflet: Wrapper de React para Leaflet
 * 
 * @param lat - Latitud de la ubicación (Torre Azhari)
 * @param lng - Longitud de la ubicación (Torre Azhari)
 * @param zoom - Nivel de zoom inicial (1-18, default: 15)
 */

"use client";

import { useEffect, useRef } from "react";

interface InteractiveMapProps {
  /** Latitud de la ubicación del proyecto */
  lat: number;
  /** Longitud de la ubicación del proyecto */
  lng: number;
  /** Nivel de zoom inicial del mapa (1-18) */
  zoom?: number;
  /** Altura del contenedor del mapa */
  height?: string;
}

export default function InteractiveMap({ 
  lat, 
  lng, 
  zoom = 15,
  height = "100%"
}: InteractiveMapProps) {
  // Referencia al contenedor del mapa
  const mapRef = useRef<HTMLDivElement>(null);
  // Referencia a la instancia del mapa de Leaflet
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // Solo ejecutar en el cliente (Next.js SSR compatibility)
    if (typeof window === "undefined" || !mapRef.current) return;

    // Prevenir múltiples instancias del mapa
    if (mapInstanceRef.current) return;

    // Cargar Leaflet dinámicamente
    const initializeMap = async () => {
      try {
        // Import dinámico de Leaflet
        const L = await import("leaflet");
        await import("leaflet/dist/leaflet.css");

        /**
         * Inicialización del mapa
         * - setView: Centra el mapa en las coordenadas especificadas
         * - zoom: Nivel de acercamiento inicial
         * - zoomControl: false para agregar controles personalizados después
         */
        const map = L.default.map(mapRef.current!, {
          center: [lat, lng],
          zoom: zoom,
          zoomControl: true, // Controles de zoom (+/-)
          scrollWheelZoom: true, // Zoom con scroll del mouse
          dragging: true, // Permite arrastrar el mapa
          touchZoom: true, // Zoom táctil en móviles
        });

        /**
         * Capa de tiles (mosaicos del mapa)
         * OpenStreetMap proporciona tiles gratuitos
         */
        L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 19,
          minZoom: 3,
        }).addTo(map);

        /**
         * Icono personalizado para el marcador
         * Reemplaza el pin azul predeterminado con uno personalizado
         */
        const customIcon = L.default.divIcon({
      className: "custom-map-marker",
      html: `
        <div style="
          position: relative;
          width: 40px;
          height: 40px;
        ">
          <!-- Círculo exterior (glow effect) -->
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            background: rgba(250, 204, 21, 0.2);
            border-radius: 50%;
            animation: pulse 2s infinite;
          "></div>
          
          <!-- Pin central -->
          <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 24px;
            height: 24px;
            background: #fbbf24;
            border: 3px solid #18181b;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
          "></div>
        </div>
        
        <style>
          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.3; }
          }
        </style>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20], // Punto de anclaje (centro del icono)
    });

        /**
         * Agregar marcador al mapa
         * bindPopup: Popup que aparece al hacer click en el marcador
         * 
         * Información del proyecto:
         * - Nombre: Torre Azhari
         * - Dirección: Luis Donaldo Colosio 123 int. 4
         * - Colonia: Jardines de la Concepción 2da Sección
         * - CP: 20120, Aguascalientes
         */
        const marker = L.default.marker([lat, lng], { icon: customIcon })
      .addTo(map)
          .addTo(map)
          .bindPopup(`
            <div style="font-family: Inter, sans-serif; padding: 4px;">
              <strong style="color: #18181b; font-size: 14px;">Torre Azhari</strong>
              <p style="color: #52525b; font-size: 12px; margin: 4px 0 0 0;">
                Luis Donaldo Colosio 123 int. 4<br/>
                Jardines de la Concepción 2da Secc.<br/>
                Aguascalientes, Ags. 20120
              </p>
            </div>
          `);

        // Guardar instancia del mapa
        mapInstanceRef.current = map;

      } catch (error) {
        console.error("Error loading map:", error);
      }
    };

    // Inicializar el mapa
    initializeMap();

    /**
     * Cleanup: Destruir el mapa al desmontar el componente
     * Importante para evitar memory leaks en Next.js
     */
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng, zoom]);

  return (
    <div 
      ref={mapRef} 
      style={{ 
        width: "100%", 
        height: height,
        borderRadius: "1.5rem", // rounded-3xl en Tailwind
        overflow: "hidden",
        zIndex: 0,
      }}
      className="relative"
    />
  );
}

