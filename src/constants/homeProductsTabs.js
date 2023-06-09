const tabPanel = (index) => {
    return {
        id: `homeProductsSlider-${index}`,
        'aria-labelledby': `sidebar-tab-${index}`,
    };
};



export const tabsData = () => {
    const tabs = [
        { title: "تخفیفات شگفت انگیز", ...tabPanel(0) },
        { title: "جدیدترین ها", ...tabPanel(1) },
        { title: "پرفروش ترین ها", ...tabPanel(2) },
    ];
    return tabs;
};