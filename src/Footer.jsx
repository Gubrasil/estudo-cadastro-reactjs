import React from 'react';

function Footer() {
    var ano = new Date().getFullYear();
    return <div>
        <p>Desenvolvido por Gustavo Brasil - {ano}</p>
    </div>;
}

export default Footer;