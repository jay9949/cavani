import { StructureResolver } from "sanity/desk";
import { AiOutlineGlobal } from "react-icons/ai";
import { structureListType } from "./helper/structure-list-type";
import { HiChat, HiOutlineAnnotation, HiOutlineTerminal } from "react-icons/hi";
import { BsFillSignIntersectionFill } from "react-icons/bs";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Documents")
    .items([
      S.listItem()
        .title("Global")
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title("Global")
            .items([
              structureListType({
                S,
                type: "header",
                title: "Header",
                icon: HiOutlineTerminal,
              }),
            ])
        ),

      S.divider(),
    ]);
