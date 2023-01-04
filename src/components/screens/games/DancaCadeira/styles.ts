import { StatusBar, StyleSheet } from 'react-native';
import { Theme } from '../../../../assets/styles';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  // Header styles
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingTop: statusBarHeight + 5,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  headerButtonIcon: {
    fontSize: 24,
    color: Theme.Colors.White,
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },

  // Body styles
  bodyContainer: {
    flex: 1,
  },
  bodyContent: {
    flex: 1,
  },
  bodyFooter: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  startGameButton: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.MagentaCrayola,
    borderRadius: 10,
  },
  startGameButtonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Theme.Colors.White,
  },

  circle: {
    width: 200,
    height: 200,
    backgroundColor: Theme.Colors.Amethyst,
    borderRadius: 200,
  },
});

export default styles;
