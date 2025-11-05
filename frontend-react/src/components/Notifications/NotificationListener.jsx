import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export default function NotificationListener() {
  const toast = useToast();

  useEffect(() => {
    // Connect to notifications WebSocket
    const ws = new WebSocket("ws://localhost:8000/notifications/ws");

    ws.onopen = () => {
      console.log("Connected to notifications WebSocket");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log("New notification:", data);

        toast({
          title: data.title || "New Notification",
          description: data.message || "You have a new message.",
          status: "info",
          duration: 4000,
          isClosable: true,
        });
      } catch (err) {
        console.error("Error parsing message:", err);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("Disconnected from notifications WebSocket");
    };

    // Cleanup on unmount
    return () => ws.close();
  }, [toast]);

  return null;
}
