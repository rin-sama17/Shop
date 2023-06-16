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
        { title: 'مدیریت نمایندگی', ...tabPanel(5) },
        { title: 'مدیریت دسترسی', ...tabPanel(6) },
        { title: "مدیریت نقش", ...tabPanel(7) },
        { title: "مدیریت ادمین ها", ...tabPanel(8) },
    ];
    return tabs;
};