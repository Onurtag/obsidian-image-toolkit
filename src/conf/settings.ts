import { App, PluginSettingTab, Setting } from 'obsidian';
import { t } from 'src/lang/helpers';
import type ImageToolkitPlugin from "src/main";
import { ImgSettingIto } from 'src/to/ImgSettingIto';
import { IMG_BORDER_COLOR, IMG_BORDER_STYLE, IMG_BORDER_WIDTH, IMG_FULL_SCREEN_MODE } from './constants';

export const IMG_GLOBAL_SETTINGS: ImgSettingIto = {
    // viewImageGlobal: true,
    viewImageEditor: true,
    viewImageInCPB: true,
    viewImageWithALink: true,
    viewImageOther: true,

    imageMoveSpeed: 10,
    imgTipToggle: true,
    imgFullScreenMode: IMG_FULL_SCREEN_MODE.FIT,

    imageBorderToggle: false,
    imageBorderWidth: IMG_BORDER_WIDTH.MEDIUM,
    imageBorderStyle: IMG_BORDER_STYLE.SOLID,
    imageBorderColor: IMG_BORDER_COLOR.RED,

    galleryNavbarToggle: false,
}

export class ImageToolkitSettingTab extends PluginSettingTab {
    private plugin: ImageToolkitPlugin;

    constructor(app: App, plugin: ImageToolkitPlugin) {
        super(app, plugin);
        this.plugin = plugin;

        // IMG_GLOBAL_SETTINGS.viewImageGlobal = this.plugin.settings.viewImageGlobal;
        IMG_GLOBAL_SETTINGS.viewImageEditor = this.plugin.settings.viewImageEditor;
        IMG_GLOBAL_SETTINGS.viewImageInCPB = this.plugin.settings.viewImageInCPB;
        IMG_GLOBAL_SETTINGS.viewImageWithALink = this.plugin.settings.viewImageWithALink;
        IMG_GLOBAL_SETTINGS.viewImageOther = this.plugin.settings.viewImageOther;

        IMG_GLOBAL_SETTINGS.imageMoveSpeed = this.plugin.settings.imageMoveSpeed;
        IMG_GLOBAL_SETTINGS.imgTipToggle = this.plugin.settings.imgTipToggle;
        IMG_GLOBAL_SETTINGS.imgFullScreenMode = this.plugin.settings.imgFullScreenMode;
        IMG_GLOBAL_SETTINGS.imageBorderToggle = this.plugin.settings.imageBorderToggle;
        IMG_GLOBAL_SETTINGS.imageBorderWidth = this.plugin.settings.imageBorderWidth;
        IMG_GLOBAL_SETTINGS.imageBorderStyle = this.plugin.settings.imageBorderStyle;
        IMG_GLOBAL_SETTINGS.imageBorderColor = this.plugin.settings.imageBorderColor;

        IMG_GLOBAL_SETTINGS.galleryNavbarToggle = this.plugin.settings.galleryNavbarToggle;
    }

    display(): void {
        let { containerEl } = this;
        containerEl.empty();

        containerEl.createEl('h2', { text: t("IMAGE_TOOLKIT_SETTINGS_TITLE") });

        containerEl.createEl('h3', { text: t("VIEW_TRIGGER_SETTINGS") });

        /* new Setting(containerEl)
            .setName(t("VIEW_IMAGE_GLOBAL_NAME"))
            .setDesc(t("VIEW_IMAGE_GLOBAL_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.viewImageGlobal)
                .onChange(async (value) => {
                    this.plugin.settings.viewImageGlobal = value;
                    if (!value) {
                        // @ts-ignore
                        this.viewImageEditorSetting?.components[0]?.setValue(false);
                        // @ts-ignore
                        this.viewImageInCPBSetting?.components[0]?.setValue(false);
                        // @ts-ignore
                        this.viewImageWithALinkSetting?.components[0]?.setValue(false);
                    }
                    this.plugin.toggleViewImage();
                    await this.plugin.saveSettings();
                })); */

        new Setting(containerEl)
            .setName(t("VIEW_IMAGE_EDITOR_NAME"))
            .setDesc(t("VIEW_IMAGE_EDITOR_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.viewImageEditor)
                .onChange(async (value) => {
                    this.plugin.settings.viewImageEditor = value;
                    this.plugin.toggleViewImage();
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("VIEW_IMAGE_IN_CPB_NAME"))
            .setDesc(t("VIEW_IMAGE_IN_CPB_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.viewImageInCPB)
                .onChange(async (value) => {
                    this.plugin.settings.viewImageInCPB = value;
                    this.plugin.toggleViewImage();
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("VIEW_IMAGE_WITH_A_LINK_NAME"))
            .setDesc(t("VIEW_IMAGE_WITH_A_LINK_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.viewImageWithALink)
                .onChange(async (value) => {
                    this.plugin.settings.viewImageWithALink = value;
                    this.plugin.toggleViewImage();
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("VIEW_IMAGE_OTHER_NAME"))
            .setDesc(t("VIEW_IMAGE_OTHER_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.viewImageOther)
                .onChange(async (value) => {
                    this.plugin.settings.viewImageOther = value;
                    this.plugin.toggleViewImage();
                    await this.plugin.saveSettings();
                }));

        // >>> VIEW_DETAILS_SETTINGS start
        containerEl.createEl('h3', { text: t("VIEW_DETAILS_SETTINGS") });

        let scaleText: HTMLDivElement;
        new Setting(containerEl)
            .setName(t("IMAGE_MOVE_SPEED_NAME"))
            .setDesc(t("IMAGE_MOVE_SPEED_DESC"))
            .addSlider(slider => slider
                .setLimits(1, 30, 1)
                .setValue(this.plugin.settings.imageMoveSpeed)
                .onChange(async (value) => {
                    scaleText.innerText = " " + value.toString();
                    this.plugin.settings.imageMoveSpeed = value;
                    IMG_GLOBAL_SETTINGS.imageMoveSpeed = value;
                    this.plugin.saveSettings();
                }))
            .settingEl.createDiv('', (el) => {
                scaleText = el;
                el.style.minWidth = "2.3em";
                el.style.textAlign = "right";
                el.innerText = " " + this.plugin.settings.imageMoveSpeed.toString();
            });

        new Setting(containerEl)
            .setName(t("IMAGE_TIP_TOGGLE_NAME"))
            .setDesc(t("IMAGE_TIP_TOGGLE_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.imgTipToggle)
                .onChange(async (value) => {
                    this.plugin.settings.imgTipToggle = value;
                    IMG_GLOBAL_SETTINGS.imgTipToggle = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("IMG_FULL_SCREEN_MODE_NAME"))
            .addDropdown(async (dropdown) => {
                for (const key in IMG_FULL_SCREEN_MODE) {
                    // @ts-ignore
                    dropdown.addOption(key, t(key));
                }
                dropdown.setValue(IMG_GLOBAL_SETTINGS.imgFullScreenMode);
                dropdown.onChange(async (option) => {
                    this.plugin.settings.imgFullScreenMode = option;
                    IMG_GLOBAL_SETTINGS.imgFullScreenMode = option;
                    await this.plugin.saveSettings();
                });
            });
        // >>> VIEW_DETAILS_SETTINGS end

        // >>>IMAGE_BORDER_SETTINGS start
        containerEl.createEl('h3', { text: t("IMAGE_BORDER_SETTINGS") });

        new Setting(containerEl)
            .setName(t("IMAGE_BORDER_TOGGLE_NAME"))
            .setDesc(t("IMAGE_BORDER_TOGGLE_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.imageBorderToggle)
                .onChange(async (value) => {
                    this.plugin.settings.imageBorderToggle = value;
                    IMG_GLOBAL_SETTINGS.imageBorderToggle = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("IMAGE_BORDER_WIDTH_NAME"))
            .addDropdown(async (dropdown) => {
                for (const key in IMG_BORDER_WIDTH) {
                    // @ts-ignore
                    dropdown.addOption(IMG_BORDER_WIDTH[key], t(key));
                }
                dropdown.setValue(IMG_GLOBAL_SETTINGS.imageBorderWidth);
                dropdown.onChange(async (option) => {
                    this.plugin.settings.imageBorderWidth = option;
                    IMG_GLOBAL_SETTINGS.imageBorderWidth = option;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(containerEl)
            .setName(t("IMAGE_BORDER_STYLE_NAME"))
            .addDropdown(async (dropdown) => {
                for (const key in IMG_BORDER_STYLE) {
                    // @ts-ignore
                    dropdown.addOption(IMG_BORDER_STYLE[key], t(key));
                }
                dropdown.setValue(IMG_GLOBAL_SETTINGS.imageBorderStyle);
                dropdown.onChange(async (option) => {
                    this.plugin.settings.imageBorderStyle = option;
                    IMG_GLOBAL_SETTINGS.imageBorderStyle = option;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(containerEl)
            .setName(t("IMAGE_BORDER_COLOR_NAME"))
            .addDropdown(async (dropdown) => {
                for (const key in IMG_BORDER_COLOR) {
                    // @ts-ignore
                    dropdown.addOption(IMG_BORDER_COLOR[key], t(key));
                }
                dropdown.setValue(IMG_GLOBAL_SETTINGS.imageBorderColor);
                dropdown.onChange(async (option) => {
                    this.plugin.settings.imageBorderColor = option;
                    IMG_GLOBAL_SETTINGS.imageBorderColor = option;
                    await this.plugin.saveSettings();
                });
            });
        // >>>IMAGE_BORDER_SETTINGS end

        // >>>GALLERY_NAVBAR_SETTINGS start
        containerEl.createEl('h3', { text: t("GALLERY_NAVBAR_SETTINGS") });

        new Setting(containerEl)
            .setName(t("GALLERY_NAVBAR_TOGGLE_NAME"))
            .setDesc(t("GALLERY_NAVBAR_TOGGLE_DESC"))
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.galleryNavbarToggle)
                .onChange(async (value) => {
                    this.plugin.settings.galleryNavbarToggle = value;
                    IMG_GLOBAL_SETTINGS.galleryNavbarToggle = value;
                    await this.plugin.saveSettings();
                }));

        // >>>GALLERY_NAVBAR_SETTINGS end

    }

}