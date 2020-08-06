export const parseAnnotation = (tool: any) => {
  const annotation = tool?.Properties?.[0]?.Annotation?.[0];
  const annotationName = annotation?.AnnotationName;
  const annotationText = annotation?.AnnotationText;

  return {
    Name: annotationName?.[0],
    Annotation: annotationText?.[0],
  };
}
