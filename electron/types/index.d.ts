// @ts-ignore
import { BrowserWindow } from 'electron'

declare global {
    namespace NodeJS {
        interface Global {
            MAIN_WINDOW: BrowserWindow;
        }
    }
}
