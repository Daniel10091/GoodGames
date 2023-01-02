import { StyleSheet } from 'react-native';
import { Theme } from '../../../assets/styles';
import { AppConfig } from '../../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppConfig.appDarkTheme ? '#1b1b1b' : Theme.Colors.AliceBlue,
  },

  // Header styles
  header: {
    height: Theme.Components.Header.height,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.Components.Header.paddingHorizontal,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: Theme.Components.Header.title.fontSize,
    fontWeight: Theme.Components.Header.title.fontWeight,
    color: Theme.Colors.Charcoal,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeButton: {
    width: Theme.Components.Header.themeButton.width,
    height: Theme.Components.Header.themeButton.height,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Theme.Components.Header.themeButton.borderRadius,
    backgroundColor: Theme.Components.Header.themeButton.backgroundColor,
  },
  themeButtonIcon: {
    fontSize: Theme.Components.Header.themeButton.icon.fontSize,
    opacity: Theme.Components.Header.themeButton.icon.opacity,
  },

  // Main styles
  main: {
    flex: 1,
    paddingBottom: 20,
  },
  gamesSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  gameBox: {
    alignItems: 'center',
    paddingVertical: 30,
    marginHorizontal: 5,
    marginBottom: 10,
    backgroundColor: Theme.Colors.SandyBrown,
    shadowColor: Theme.Colors.Charcoal,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 10,
  },
  gameIconContainer: {
    width: 90,
    height: 90,
  },
  gameIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  gameNameContainer: {
    marginTop: 20
  },
  gameName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.Colors.DeepSpaceSparkle,
  },});

export default styles;
