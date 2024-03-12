import { SignProps } from "@/utils/helper";

export default function OSign({ invisible = false }: SignProps) {
  const className =
    `w-28 h-28 bg-transparent border-[12px] border-dark-blue/90
  rounded-full` + (invisible ? " invisible" : "");

  return <div className={className}></div>;
}
