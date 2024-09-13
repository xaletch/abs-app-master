import { cn } from "@/lib/utils";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from "@headlessui/react";
import { Loader2, SearchIcon } from "lucide-react";
import { forwardRef, useState } from "react";
export interface SuggestInputProps {
    placeholder?: string;
}
const people = [
    { id: 1, name: "Tom Cook" },
    { id: 2, name: "Wade Cooper" },
    { id: 3, name: "Tanya Fox" },
    { id: 4, name: "Arlene Mccoy" },
    { id: 5, name: "Devon Webb" },
];
export const CityInput = forwardRef<HTMLInputElement, SuggestInputProps>(
    ({ placeholder }, ref) => {
        const [selectedPerson, setSelectedPerson] = useState();
        const [query, setQuery] = useState("");

        const filteredPeople =
            query === ""
                ? people
                : people.filter((person) => {
                      return person.name
                          .toLowerCase()
                          .includes(query.toLowerCase());
                  });

        return (
            <Combobox
                value={selectedPerson}
                onChange={setSelectedPerson}
                onClose={() => setQuery("")}
            >
                <ComboboxButton className={"w-full p-0 border-0 relative"}>
                    <ComboboxInput
                        className={
                            "flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        }
                        ref={ref}
                        placeholder={placeholder}
                        displayValue={(person) => person?.name}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <SearchIcon className="absolute top-2/4 -translate-y-[50%] left-2 w-4 h-4" />
                    <div
                        className={cn(
                            "absolute w-5 h-5 top-2/4 -translate-y-[50%] right-2 hidden"
                        )}
                    >
                        <Loader2 className={cn("w-5 h-5 ", "animate-spin ")} />
                    </div>
                </ComboboxButton>
                <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <ComboboxOptions
                        anchor="bottom"
                        className={cn(
                            "w-[var(--input-width)] [--anchor-gap:5px] empty:invisible p-2 max-h-60  overflow-auto rounded-md border border-input bg-background  text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        )}
                    >
                        {filteredPeople.map((person) => (
                            <ComboboxOption
                                key={person.id}
                                value={person}
                                className={({ active }) =>
                                    `relative cursor-default select-none p-2 rounded-md ${
                                        active ? "bg-accent" : "text-gray-900"
                                    }`
                                }
                            >
                                {person.name}
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Transition>
            </Combobox>
        );
    }
);
