export const getTitle = (route) => {
    let title = '';
    if(route === '/') title = 'Inicio';
    else title = route.charAt(1).toUpperCase() 
        + route.substring(2, route.length);
    title = title.replace('/', ' - ');
    return `${title} | ${process.env.SITE_NAME}`;
}