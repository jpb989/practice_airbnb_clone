import { create } from "zustand"

interface useLoginModalStore{
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useLoginModal = create<useLoginModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))

export default useLoginModal