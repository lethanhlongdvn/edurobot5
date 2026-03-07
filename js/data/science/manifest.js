export const scienceManifest = Array.from({ length: 70 }, (_, idx) => {
  const periodNum = idx + 1;
  const period = String(periodNum);
  const padded = period.padStart(3, '0');
  const week = String(Math.ceil(periodNum / 2));
  return {
    id: padded,
    period,
    week,
    title: `Bài Khoa học ${period}`,
    topic: 'Khoa học',
    modulePath: `./${padded}.js`,
    exportName: `lesson${padded}`
  };
});
