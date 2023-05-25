const tabPanel = (index) => {
    return {
        id: `adminPanel-${index}`,
        'aria-labelledby': `sidebar-tab-${index}`,
    };
};



export const tabsData = () => {
    const tabs = [
        { title: 'مدیریت اسلاید', ...tabPanel(0) },
        { title: 'مدیریت محصولات', ...tabPanel(1) },
        { title: 'مدیریت پست', ...tabPanel(2) },
        { title: 'مدیریت تخفیف', ...tabPanel(3) },
        { title: 'مدیریت دسته بندی', ...tabPanel(4) },
        { title: 'مدیریت نمایندگی', ...tabPanel(5) },
        { title: 'مدیریت دسترسی', ...tabPanel(6) },
        { title: "مدیریت نقش", ...tabPanel(7) },
    ];
    return tabs;
};