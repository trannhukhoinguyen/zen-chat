import { useEffect, useRef } from 'react';
import { userConfig } from '../../config/userConfig';
import DraggableWindow from './DraggableWindow';

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <DraggableWindow
      title="ĐƯỜNG_LỐI_THỰC_HÀNH_THAM_TỔ_SƯ_THIỀN.pdf"
      onClose={onClose}
      initialPosition={{
        x: Math.floor(window.innerWidth * 0.4),
        y: Math.floor(window.innerHeight * 0.2)
      }}
      className="w-[90%] h-[90%] max-w-5xl"
      initialSize={{ width: 800, height: 600 }}
    >
      <div className="h-auto bg-white">
        <figure className="h-auto">
          <object data={userConfig.document.localPath} type="application/pdf" width="100%" className="h-auto"></object>
        </figure>
      </div>
    </DraggableWindow>
  );
}
