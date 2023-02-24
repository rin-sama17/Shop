const tabPanel = (index) => {
    return {
        id: `tabpanel-${index}`,
        'aria-labelledby': `sidebar-tab-${index}`,
    };
};



export const tabsData = () => {
    const tabs = [
        { title: 'مدیریت اسلایدها', ...tabPanel(0) },
        { title: 'مدیریت سفارشات', ...tabPanel(1) },
        { title: 'مدیریت محصولات', ...tabPanel(2) },
        { title: 'مدیریت پست ها', ...tabPanel(3) },
        { title: 'مدیریت تخفیف ها', ...tabPanel(4) },
        { title: 'مدیریت دسته بندی ها', ...tabPanel(5) },
    ];
    return tabs;
};