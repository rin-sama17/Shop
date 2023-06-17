const tabPanel = (index) => {
    return {
        id: `adminPanel-${index}`,
        'aria-labelledby': `sidebar-tab-${index}`,
    };
};



export const tabsData = () => {
    const tabs = [
        { title: 'ویرایش اطلاعات', ...tabPanel(0) },
        { title: "مدیریت اسلایدر", ...tabPanel(1) },
        { title: 'مدیریت محصولات', ...tabPanel(2) },
        { title: 'مدیریت پست', ...tabPanel(3) },
        { title: 'مدیریت دسته بندی', ...tabPanel(4) },
        { title: 'مدیریت تگ ها', ...tabPanel(5) },
        { title: 'مدیریت نمایندگی', ...tabPanel(6) },
        { title: 'مدیریت دسترسی', ...tabPanel(7) },
        { title: "مدیریت نقش", ...tabPanel(8) },
        { title: "مدیریت ادمین ها", ...tabPanel(9) },
    ];
    return tabs;
};