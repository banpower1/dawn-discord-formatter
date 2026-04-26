import { useTranslation } from 'react-i18next'

export enum DungeonId {
  Academy = 'Academy', // Algeth'ar Academy
  Caverns = 'Caverns', // Maisara Caverns
  Magisters = 'Magisters', // Magisters' Terrace
  Nexus = 'Nexus', // Nexus-Point Xenas
  Pit = 'Pit', // Pit of Saron
  Seat = 'Seat', // Seat of the Triumvirate
  Skyreach = 'Skyreach', // Skyreach
  Spire = 'Spire', // Windrunner Spire
}

export function useDungeonTranslations(): Record<DungeonId, string> {
  const { t } = useTranslation()

  return {
    [DungeonId.Academy]: t('dungeon.academy', "Algeth'ar Academy"),
    [DungeonId.Caverns]: t('dungeon.caverns', 'Maisara Caverns'),
    [DungeonId.Magisters]: t('dungeon.magisters', "Magisters' Terrace"),
    [DungeonId.Nexus]: t('dungeon.nexus', 'Nexus-Point Xenas'),
    [DungeonId.Pit]: t('dungeon.pit', 'Pit of Saron'),
    [DungeonId.Seat]: t('dungeon.seat', 'Seat of the Triumvirate'),
    [DungeonId.Skyreach]: t('dungeon.skyreach', 'Skyreach'),
    [DungeonId.Spire]: t('dungeon.spire', 'Windrunner Spire'),
  }
}
export enum LegacyDungeonId {
  WS = 'WS',
  ToP = 'ToP',
  ML = 'ML',
  Cinder = 'Cinder',
  DFC = 'DFC',
  Rook = 'Rook',
}
export function useLegacyDungeonTranslations(): Record<LegacyDungeonId, string> {
  const { t } = useTranslation()

  return {
    [LegacyDungeonId.WS]: t('dungeon.ws'),
    [LegacyDungeonId.ToP]: t('dungeon.top'),
    [LegacyDungeonId.ML]: t('dungeon.ml'),
    [LegacyDungeonId.Cinder]: t('dungeon.cinder'),
    [LegacyDungeonId.DFC]: t('dungeon.dfc'),
    [LegacyDungeonId.Rook]: t('dungeon.rook'),
  }
}
