import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="card-glass border border-accent-border">
        <div className="flex flex-col md:flex-row items-center p-2">
          <div className="flex-shrink-0 bg-accent-soft border border-accent-border p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-accent-custom" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-heading mb-2">Rate Limit Reached</h3>
            <p className="text-main mb-1">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="text-sm text-main/70">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;