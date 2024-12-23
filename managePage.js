window.Utiq = window.Utiq || {};
window.Utiq.config = {
  CMP: "none", // For Separate Pop-up - it would be other ID for Integrated Model
  cmpUtiqPurposeId: "", // Only if you use Integrated Model
  cmpUtiqVendorId: "", // Only if you use Integrated Model
  customizationOptions: {
    language: "en" // Optional attribute. Allowed values: en, de, es, fr or it
  }
};
(() => {
  const s = document.createElement("script")
  s.type = 'text/javascript';
  s.src = "https://utiq.plamiche.com/utiqLoader.js"
  s.async = true;
  document.head.appendChild(s)
})();
(() => {
  const s = document.createElement("script")
  s.type = 'text/javascript';
  s.src = "https://utiq.plamiche.com/utiqManagePage.js"
  s.async = true;
  document.head.appendChild(s)
})();