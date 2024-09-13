import { CRM } from "@/api/CRM/types";
import { FC, useRef } from "react";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { ObjectCard } from "@/components/molecules/object";
interface ObjectSelectionListProps {
    list: CRM[];
    modalOpen: boolean;
}
export const ObjectSelectionList: FC<ObjectSelectionListProps> = ({
    list,
    modalOpen,
}) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const virtualizer = useWindowVirtualizer({
        count: list.length,
        estimateSize: () => 45,
        gap: 10,
        scrollMargin: listRef.current?.offsetTop ?? 0,
    });

    return (
        <div ref={listRef} className="mb-1">
            <div
                style={{
                    width: "100%",
                    position: "relative",
                    height: `${virtualizer.getTotalSize()}px`,
                }}
            >
                {virtualizer
                    .getVirtualItems()
                    .map(({ index, start, key, measureElement }) => {
                        return (
                            <div
                                key={key}
                                data-index={index}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 40,
                                    width: "100%",
                                    marginBottom: "15px",
                                    transform: `translateY(${
                                        start - virtualizer.options.scrollMargin
                                    }px)`,
                                }}
                                ref={measureElement}
                            >
                                <ObjectCard
                                    selection={true}
                                    transferred={false}
                                    editable={false}
                                    modalOpen={modalOpen}
                                    {...list[index]}
                                    onCollapseClick={() => {
                                        virtualizer.scrollToIndex(index);
                                    }}
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
