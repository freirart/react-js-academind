import { SignProps } from "@/utils/helper";

export default function XSign({ invisible = false }: SignProps) {
  const classToAdd = invisible ? " invisible" : "";
  return (
    <>
      <div
        className={
          "z-0 rounded fixed bg-special-red/90 w-32 h-3 -rotate-45" +
          classToAdd
        }
      ></div>
      <div
        className={
          "z-10 rounded fixed bg-special-red/90 w-32 h-3 rotate-45" +
          classToAdd
        }
      ></div>
    </>
  );
}
