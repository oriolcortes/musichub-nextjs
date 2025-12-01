// Loader a nivel de ruta que se muestra mientras el servidor está obteniendo datos.
export default function Loading() {
  return (
    <div className="mx-auto flex max-w-5xl items-center justify-center p-12">
      <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-[#F50057]" />
      <span className="text-sm font-medium text-gray-600">Cargando...</span>
    </div>
  );
}
