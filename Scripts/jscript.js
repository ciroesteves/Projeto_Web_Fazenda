function funTrocaNegocio(esc_neg) {
    img_negocio.src = "Imagens/" + esc_neg + ".jpg";
    img_negocio.alt = img_negocio.tittle = esc_neg;
    if (esc_neg == "corte") {
        texto_negocio.innerHTML = "É caracterizada pela criação de bovinos com o objetivo de produzir carne e seus derivados. Existem diversas características importantes que tornaram essa atividade única e responsável pela melhoria dos índices econômicos de diversos países. Além de ser uma fonte importante de proteína animal para a população.";
    }
    if (esc_neg == "leite") {
        texto_negocio.innerHTML = "Pecuária de leite é a criação de gado com o objetivo de produção de leite, em sua maioria para a indústria de laticínios."
    }
    if (esc_neg == "consultoria") {
        texto_negocio.innerHTML = "A consultoria rural consiste em tratar de assuntos administrativos e técnicos e para profissionais que desejam galgar este caminho são necessários conhecimentos amplos e específicos na área."
    }
}