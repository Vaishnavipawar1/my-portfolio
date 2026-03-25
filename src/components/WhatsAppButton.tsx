import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918767980311"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform glow-effect"
    style={{ background: "hsl(142, 70%, 45%)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} />
  </a>
);

export default WhatsAppButton;
