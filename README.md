# zBridge Club Flatpak

This directory maintains the Linux Flatpak package for zBridge Club. It wraps the live website (`https://zbridge.club`) using Electron and packages it as a Flatpak.

## Prerequisites

- Node.js (v18+)
- Flatpak installed (`sudo apt install flatpak`)
- Flatpak Builder installed (`sudo apt install flatpak-builder`)
- **Required Runtime:** Freedesktop SDK 24.08 (will be auto-installed if possible)

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

## Building the Flatpak

To generate the `.flatpak` bundle:

```bash
npm run dist
```

This command will:
1.  Clean previous builds.
2.  Build the Electron app (unpacked) into `dist/linux-unpacked`.
3.  Use `flatpak-builder` and the `club.zbridge.zbridge.json` manifest to build the Flatpak.
4.  Export the result to `zBridgeClub.flatpak`.

**Output:** `zBridgeClub.flatpak` (in this directory).

## Installing the Flatpak

You can install the generated file locally:

```bash
flatpak install --user zBridgeClub.flatpak
```

## Running Locally (Development)

To test the Electron wrapper without building the full Flatpak:

```bash
npm start
```

## Configuration

- **Manifest:** `club.zbridge.zbridge.json` - Defines the Flatpak build configuration, sandbox permissions, and runtime version.
- **Electron Entry:** `main.js` - The script that loads the website.
- **Icon:** `icon.png` - App icon.