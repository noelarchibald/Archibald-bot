;
 client  const =  new  Discord.Client ();

const  token  =  " MjUwMDA1MDI3MTUyNzIzOTY5.CxOi3g.T12XrjS8QW6qjTG6qwkIODRUNhI " ;
var prefix =  " . " ;
var mention =  " <@ 1930903359700619264> " ;
var memberCount =  client . les utilisateurs . la taille ;
var servercount =  client . guildes . la taille ;

client . on ( " prêt " , () => {
	var serveurs =  client . guildes . array (). carte ( g  =>  g . nom ). rejoindre ( ' , ' );
	console . log ( " ------------------------------------------ " );
console . log ( ' [!] Connexion en cours ... \ n [!] Veuillez patienté! \ n [!] Les évolutions sont après! :)   \ n [!] Les préfixes actuelles:   '  + préfixe +  " \ n [! ] Mentions = "  + mention +  " \ n [!] Nombre de membres: "  + memberCount +  " \ n [!] Nombre de serveurs: "  + servercount);
});

client . sur ( ' message ' , message  => {
	if ( message . content  === ( " test " )) {
	message . répondre ( ' test! ' );
} else  if ( message . content  === ( " bonjour " )) {
	message . réponse ( ' bonjour à toi ' );
} else  if ( message . content . startsWith ( ' ! nom de bot ' )) {
	client . utilisateur . setUsername ( message . contenu . substr ( 9 ));
} else  if ( message . content  ===  " ! stats " ) {
	laissez m =  "  " ;
	m + =  ' Il n'y a actuellement $ {message.guild.channels.size} channels sur ce serveurs \ n ' ;
	m + =  ' je suis en compagnie de $ {message.guild.members.size} membres ' ;
	m + =  ' je suis présent dans $ {client.guild.size} serveurs \ n ' ;



client . login NTM2MjIzNzA5NzI0MTQ3NzM4.DyTl3Q.WQs7LK4KXW-nQmCGJq43TiNn2VG
}
});
