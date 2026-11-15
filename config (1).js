// =====================================================================
//  Réglages de La Bourse des Ateliers
//  Remplacez les deux valeurs Supabase par celles de votre projet
//  (Supabase > Project Settings > API). Tant qu'elles ne sont pas
//  remplies, le site tourne en « mode démo » sans rien enregistrer.
// =====================================================================
window.BOURSE_CONFIG = {
  supabaseUrl: "https://pnrnollrjnbnzsyssqcz.supabase.co",
  supabaseAnonKey: "sb_publishable_U3b2ed40ERnotEnUa8nSsQ_ByuCEwMy",

  // Adresse qui reçoit les signalements d'annonces (bouton « Signaler »).
  // Laissez vide "" pour masquer le bouton.
  emailModeration: "",

  // Nom affiché en haut du site
  nomSite: "La Bourse des Ateliers"
};
