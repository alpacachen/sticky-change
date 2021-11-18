export declare class WatchSticky {
    private readonly topOb;
    private readonly bottomOb;
    private _isIntersecting;
    private topIsIntersecting;
    constructor(target: HTMLElement, root: HTMLElement | null, onSticky?: () => void, offSticky?: () => void);
    disconnect(): void;
}
export default WatchSticky;
