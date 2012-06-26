//
//  VelocityBench.h
//  velocity
//
//  Created by Brian Leroux on 6/25/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#ifdef CORDOVA_FRAMEWORK
#import <Cordova/CDVPlugin.h>
#else
#import "CDVPlugin.h"
#endif

@interface VelocityBench : CDVPlugin {

}
- (void) echo:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options;
@end
