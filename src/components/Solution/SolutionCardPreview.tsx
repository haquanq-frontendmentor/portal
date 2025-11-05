import { Solution } from "@/services/Solution/types";
import { hexToRgb } from "@/utils/hexToRgb";

interface SolutionCardPreviewProps {
  solution: Solution;
}

export const SolutionCardPreview = ({ solution }: SolutionCardPreviewProps) => {
  return (
    <div>
      <a
        className="group relative aspect-384/282 rounded-xl shadow-lg"
        href={solution.live}
        target="_blank"
        aria-label="Go to live site"
      >
        <span className="block overflow-hidden rounded-xl">
          <img
            className="transition-transform duration-500 group-hover:scale-105"
            src={solution.images.preview}
            alt=""
          />
        </span>
        <span
          className="absolute inset-0 block rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `0 4px 28px -12px rgba(${hexToRgb(solution.colors.brand).join(",")}, 0.75)`,
          }}
        ></span>
        <span className="absolute inset-0 z-10 block rounded-xl inset-ring-2 inset-ring-gray-200"></span>
        <span
          className="absolute inset-0 z-20 block rounded-xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            borderColor: `rgba(${hexToRgb(solution.colors.brand).join(",")}, 1)`,
          }}
        ></span>
      </a>
    </div>
  );
};
