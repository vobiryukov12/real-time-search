import "./ErrorMessage.scss";

export function ErrorMessage({ errorMessage }: { errorMessage: string }) {
  return <div className="error">{errorMessage}</div>;
}
