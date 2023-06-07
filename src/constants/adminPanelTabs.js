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
        { title: 'مدیریت دسته بندی', ...tabPanel(3) },
        { title: 'مدیریت نمایندگی', ...tabPanel(4) },
        { title: 'مدیریت دسترسی', ...tabPanel(5) },
        { title: "مدیریت نقش", ...tabPanel(6) },
        { title: "مدیریت ادمین ها", ...tabPanel(7) },
    ];
    return tabs;
};