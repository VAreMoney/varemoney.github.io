import React, { useState, useCallback, useRef, useEffect } from 'react';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    onCopy?: () => void;
    showOnClick?: boolean;
    useDiv?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, onCopy, showOnClick = false, useDiv = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [tooltipText, setTooltipText] = useState(text);
    const positionRef = useRef({ x: 0, y: 0 });
    const tooltipRef = useRef<HTMLSpanElement | null>(null);

    const updatePosition = useCallback(() => {
        if (tooltipRef.current) {
            tooltipRef.current.style.left = `${positionRef.current.x}px`;
            tooltipRef.current.style.top = `${positionRef.current.y - 30}px`;
            tooltipRef.current.style.transform = 'translateX(-50%)';
        }
        requestAnimationFrame(updatePosition);
    }, []);

    useEffect(() => {
        requestAnimationFrame(updatePosition);
    }, [updatePosition]);

    const handleMouseEnter = useCallback((event: React.MouseEvent) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
        setIsVisible(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        positionRef.current = { x: event.clientX, y: event.clientY };
    }, []);

    const handleClick = useCallback(() => {
        if (showOnClick) {
            setIsVisible(true);
            if (onCopy) {
                onCopy();
                setTooltipText("Copied!");
                setTimeout(() => {
                    setTooltipText(text);
                    setIsVisible(false);
                }, 2000);
            }
        }
    }, [showOnClick, onCopy, text]);

    const commonProps = {
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        onMouseMove: handleMouseMove,
        style: { position: 'relative', display: 'inline-block' } as React.CSSProperties,
    };

    const WrapperElement = useDiv ? 'div' : 'button';

    return (
        <WrapperElement {...commonProps}>
            {children}
            <span
                ref={tooltipRef}
                className={`tooltip ${isVisible ? 'visible' : ''}`}
                style={{
                    position: 'fixed',
                    zIndex: 1000,
                }}
            >
                {tooltipText}
            </span>
        </WrapperElement>
    );
};

export default Tooltip;
