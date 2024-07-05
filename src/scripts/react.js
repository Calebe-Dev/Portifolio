
import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

export const MyComponent: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const gradientRef = useRef<NeatGradient | null>(null);

    useEffect(() => {

        if (!canvasRef.current)
            return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
           
                "colors": [
                    {
                        "color": "#410611",
                        "enabled": true
                    },
                    {
                        "color": "#392D14",
                        "enabled": true
                    },
                    {
                        "color": "#000506",
                        "enabled": true
                    },
                    {
                        "color": "#0F052B",
                        "enabled": true
                    },
                    {
                        "color": "#333333",
                        "enabled": false
                    }
                ],
                "speed": 2,
                "horizontalPressure": 4,
                "verticalPressure": 5,
                "waveFrequencyX": 2,
                "waveFrequencyY": 3,
                "waveAmplitude": 5,
                "shadows": 0,
                "highlights": 2,
                "colorBrightness": 1,
                "colorSaturation": 7,
                "wireframe": false,
                "colorBlending": 6,
                "backgroundColor": "#003FFF",
                "backgroundAlpha": 1,
                "resolution": 1
        }
        
        return gradientRef.current.destroy;

    }, [canvasRef.current]);

    return (
        <canvas
            className={bgColor}
            style={{
                isolation: "isolate",
                height: "100%",
                width: "100%",
            }}
            ref={canvasRef}
        />
    );
}