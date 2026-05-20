export interface DetailedMessage {
  errorType: string;
  message: string;
  details?: {
    messages: string[];
  }[];
}
