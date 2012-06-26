//
//  VelocityBench.m
//  velocity
//
//  Created by Brian Leroux on 6/25/12.
//  Copyright (c) 2012 __MyCompanyName__. All rights reserved.
//

#import "VelocityBench.h"

@implementation VelocityBench


- (void) echo:(NSMutableArray*)arguments withDict:(NSMutableDictionary*)options {
        
    NSString* callbackId = [arguments objectAtIndex:0];
    NSString* msg = [arguments objectAtIndex:1];
    
    [super writeJavascript:[[CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:msg] toSuccessCallbackString:callbackId]];

}

@end
