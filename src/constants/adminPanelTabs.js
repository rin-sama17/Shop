const tabPanel = (index) => {
    return {
        id: `adminPanel-${index}`,
        'aria-labelledby': `sidebar-tab-${index}`,
    };
};



export const tabsData = () => {
    const tabs = [
        { title: 'مدیریت اسلایدها', ...tabPanel(0) },
        { title: 'مدیریت محصولات', ...tabPanel(2) },
        { title: 'مدیریت پست ها', ...tabPanel(3) },
        { title: 'مدیریت تخفیف ها', ...tabPanel(4) },
        { title: 'مدیریت دسته بندی ها', ...tabPanel(5) },
        { title: 'مدیریت کامنت ها', ...tabPanel(6) },
        { title: 'توضیحات فروشگاه', ...tabPanel(7) },
        { title: 'مدیریت ادمین ها', ...tabPanel(8) },
    ];
    return tabs;
};