import { FeaturedChannelListComponent } from './featured-channel-list/featured-channel-list.component';
import { GameChannelListComponent } from './game-channel-list/game-channel-list.component';

import { ChannelService } from './channel.service';

const moduleName = 'sample-app-channel';

export default moduleName;

angular.module(moduleName, [])
    .component('featuredChannelList', FeaturedChannelListComponent)
    .component('gameChannelList', GameChannelListComponent)
    .service('channelService', ChannelService);