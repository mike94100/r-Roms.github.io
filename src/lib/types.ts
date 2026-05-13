export type Link = {
    name: string;
    url: string;
    description?: string;
};

export type Console = {
    manufacturer: string;
    name: string;
    emulators: Emulator[];
    fileTypes: FileType[];
};

export type Emulator = {
    name: string;
    platforms: string[];
    url?: string;
};

export type FileType = {
    name: string;
    compressed: boolean;
    encrypted: boolean
};
