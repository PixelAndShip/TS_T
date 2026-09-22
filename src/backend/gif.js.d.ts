declare module "gif.js" {
    interface GIFOptions {
        workers?: number;
        quality?: number;
        width?: number;
        height?: number;
        workerScript?: string;
        repeat?: number;
    }

    interface AddFrameOptions {
        copy?: boolean;
        delay?: number;
    }

    class GIF {
        constructor(options?: GIFOptions);

        addFrame(
            element: HTMLCanvasElement,
            options?: AddFrameOptions
        ): void;

        on(
            event: "finished",
            callback: (blob: Blob) => void
        ): void;

        render(): void;
    }

    export default GIF;
}