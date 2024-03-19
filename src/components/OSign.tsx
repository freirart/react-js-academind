import { SignProps } from "@/utils/helper";

export default function OSign({ invisible = false }: SignProps) {
  const className =
    `md:w-28 w-24 md:h-28 h-24 bg-transparent md:border-[12px] border-[10px] border-dark-blue/90
  rounded-full` + (invisible ? " invisible" : "");

  return <div className={className}></div>;
}
